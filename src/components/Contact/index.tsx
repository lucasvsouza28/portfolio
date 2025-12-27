import React, { FormEvent, InputHTMLAttributes, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { ContactSection } from '../../@types'
import SectionHeader from '../SectionHeader'
import { useLocaleStore } from '../../stores/locale'
import getPropByLocale from '../../helpers/getPropByLocale';

type ContactProps = ContactSection & {}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const ContactInput = (props: InputProps) => (
    <input
        {...props}
        className='flex-1
        p-2
        rounded-md outline-none
        text-gray-700
        '
    />
);

const Contact = ({
    title,
    name_placeholder,
    message_placeholder,
    cancel_button,
    submit_button,
}: ContactProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [locale] = useLocaleStore(state => [state.locale]);
    
    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message || !email.includes('@')){
            return;
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                message,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            toast("oh oh, tivemos um problema", { type: 'error' });
            return;
        }

        toast("Mensagem enviada com sucesso!", { type: 'success' });
        resetForm();
    }

    return (
        <div>
            <SectionHeader title={getPropByLocale(title, locale)} />
            <form                
                onSubmit={handleSubmit}
                className='mt-10
                flex flex-col gap-y-2
                max-w-3xl
                mx-auto'
            >
                <div
                    className='flex flex-col sm:flex-row justify-between gap-y-2 sm:gap-x-2'
                >
                    <ContactInput
                        placeholder={getPropByLocale(name_placeholder, locale)}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <ContactInput
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <textarea
                    placeholder={getPropByLocale(message_placeholder, locale)}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className='w-full max-h-48
                    p-2
                    rounded-md
                    text-gray-700
                    outline-none
                    '
                >
                </textarea>
                <div
                    className='flex justify-end gap-x-2'
                >
                    <button
                        type="reset"
                        onClick={resetForm}
                        className='bg-slate-300
                        text-black font-semibold
                        rounded-sm p-2'
                    >
                        {getPropByLocale(cancel_button, locale)}
                    </button>
                    <button
                        type="submit"
                        className='bg-blue-800
                        text-white font-semibold
                        rounded-sm p-2
                        '
                    >
                        {getPropByLocale(submit_button, locale)}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;
