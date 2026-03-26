import React, { useState } from 'react'

export default function Contact({ t }) {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    const newErrors = {}

    if (name.length < 2) newErrors.name = t.contact.errors.name

    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(email)) newErrors.email = t.contact.errors.email

    if (message.length < 10) newErrors.message = t.contact.errors.message

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})

    try {
      const formData = new FormData(form)

      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      form.reset()
      setSubmitted(true)
    } catch (err) {
      alert('Error: ' + err.message)
    }
  }

  if (submitted) {
    return (
      <section className="max-w-4xl mx-auto text-center py-12 px-4 min-h-screen overflow-y-auto">
        <h2 className="text-4xl font-bold mb-4 text-slate-100">
          {t.contact.thankYou}
        </h2>
        <p className="text-muted text-lg">{t.contact.success}</p>
      </section>
    )
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 text-slate-100 min-h-screen overflow-y-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">{t.contact.title}</h2>
      <p className="mb-10 text-muted text-center">{t.contact.subtitle}</p>

      <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 shadow-xl shadow-black/30 p-6 sm:p-8">
        <div className="mb-6 pb-5 border-b border-slate-700/60">
          <h3 className="text-2xl font-semibold text-slate-100">
            {t.contact.cardTitle}
          </h3>
          <p className="mt-2 text-slate-400">{t.contact.cardText}</p>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              {t.contact.honeypot}
              <input name="bot-field" />
            </label>
          </p>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-300 mb-2">
              {t.contact.labels.name}
            </label>
            <input
              type="text"
              name="name"
              placeholder={t.contact.placeholders.name}
              className={`px-4 py-3 rounded-lg border bg-slate-950/70 text-slate-100 border-slate-600 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-300 mb-2">
              {t.contact.labels.email}
            </label>
            <input
              type="email"
              name="email"
              placeholder={t.contact.placeholders.email}
              className={`px-4 py-3 rounded-lg border bg-slate-950/70 text-slate-100 border-slate-600 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-300 mb-2">
              {t.contact.labels.message}
            </label>
            <textarea
              name="message"
              placeholder={t.contact.placeholders.message}
              className={`px-4 py-3 rounded-lg border bg-slate-950/70 text-slate-100 border-slate-600 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all min-h-36 resize-y ${
                errors.message ? 'border-red-500' : ''
              }`}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="mt-1 px-5 py-3 rounded-lg bg-accent text-slate-900 font-semibold hover:bg-sky-300 transition-all shadow-lg shadow-sky-500/20"
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  )
}
