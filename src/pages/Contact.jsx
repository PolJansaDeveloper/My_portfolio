import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    // Validación
    const newErrors = {}
    if (name.length < 2) newErrors.name = 'Por favor escribe un nombre válido.'
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(email)) newErrors.email = 'Email inválido.'
    if (message.length < 10) newErrors.message = 'El mensaje debe tener al menos 10 caracteres.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Enviar datos a Netlify
    const data = new FormData(form)
    fetch('/', { method: 'POST', body: data })
      .then(() => setSubmitted(true))
      .catch((err) => alert('Error al enviar: ' + err))
  }

  if (submitted) {
    return (
      <section className="max-w-4xl mx-auto text-center py-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Gracias</h2>
        <p className="text-muted text-lg">
          Tu mensaje ha sido enviado. ¡Te contactaré pronto!
        </p>
      </section>
    )
  }

  return (
    <section className="max-w-4xl mx-auto text-center py-12">
      <h2 className="text-4xl font-bold mb-6 text-white">Contacto</h2>
      <p className="mb-8 text-muted">
        ¿Tienes un proyecto o quieres colaborar? Escríbeme y lo hablamos.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className={`px-4 py-2 rounded border bg-transparent text-white border-white/20 ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className={`px-4 py-2 rounded border bg-transparent text-white border-white/20 ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="flex flex-col">
          <textarea
            name="message"
            placeholder="Mensaje"
            className={`px-4 py-2 rounded border bg-transparent text-white border-white/20 ${
              errors.message ? 'border-red-500' : ''
            }`}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="mt-2 px-4 py-2 rounded border border-white text-black font-semibold"
          style={{ backgroundColor: '#00FF7F' }} // Fondo verde, letras negras
        >
          Enviar
        </button>

        <a
          href="mailto:poljansa.developer@gmail.com"
          className="mt-4 flex items-center justify-center gap-2 text-green-400 hover:underline"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
          Contactar por email
        </a>
      </form>
    </section>
  )
}
