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

    // tests covering validation helpers
    it('Muestra error de nombre obligatorio al enviar formulario vacío', () => {
        // sólo click en enviar sin rellenar nada
        fireEvent.click(screen.getByText('Enviar Datos'))
        expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument()
    })

    it('Muestra error de correo obligatorio al enviar sin email', () => {
        // completar nombre y mensaje para aislar email
        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Ana' } })
        fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: 'Hola' } })
        fireEvent.click(screen.getByText('Enviar Datos'))
        expect(screen.getByText('El correo electrónico es obligatorio')).toBeInTheDocument()
    })

    it('Muestra error de correo inválido cuando el formato es incorrecto', () => {
        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Ana' } })
        fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: 'Hola' } })
        fireEvent.change(screen.getByLabelText('Correo Electrónico:'), { target: { value: 'bad-email' } })
        fireEvent.click(screen.getByText('Enviar Datos'))
        expect(screen.getByText('El correo electrónico no es válido')).toBeInTheDocument()
    })

    it('No muestra errores cuando nombre y correo son válidos', () => {
        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Ana' } })
        fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: 'Hola' } })
        fireEvent.change(screen.getByLabelText('Correo Electrónico:'), { target: { value: 'ana@example.com' } })
        fireEvent.click(screen.getByText('Enviar Datos'))
        // se supone que no hay mensajes de error visibles
        expect(screen.queryByText(/obligatorio/i)).toBeNull()
        expect(screen.queryByText(/no es válido/i)).toBeNull()
    })
})