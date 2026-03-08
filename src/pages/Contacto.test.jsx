import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Contacto from './Contacto'

describe('Contacto', () => {
    beforeEach(() => {
        render(<Contacto />)
    })
            
    it('Renderiza el componente Contacto', () => {
        expect(screen.getByText('Contacto')).toBeInTheDocument()
    })

    it('Verifica que existe el texto "Enviar Datos"', () => {
        expect(screen.getByText('Enviar Datos')).toBeInTheDocument()
    })

    it('Verifica que existe el botón "Borrar"', () => {
        expect(screen.getByText('Borrar')).toBeInTheDocument()
    })

    it('Limpia todos los campos cuando se clickea "Borrar"', () => {
        const nameInput = screen.getByLabelText('Nombre:')
        const emailInput = screen.getByLabelText('Correo Electrónico:')
        const messageInput = screen.getByLabelText('Mensaje:')
        const borrarBtn = screen.getByText('Borrar')

        fireEvent.change(nameInput, { target: { value: 'Juan' } })
        fireEvent.change(emailInput, { target: { value: 'juan@example.com' } })
        fireEvent.change(messageInput, { target: { value: 'Hola' } })

        expect(nameInput).toHaveValue('Juan')
        expect(emailInput).toHaveValue('juan@example.com')
        expect(messageInput).toHaveValue('Hola')

        fireEvent.click(borrarBtn)

        expect(nameInput).toHaveValue('')
        expect(emailInput).toHaveValue('')
        expect(messageInput).toHaveValue('')
    })
})