import React, { useState } from 'react'
import ContactList from './ContactList'
import emailjs from 'emailjs-com';
import InputMask from 'react-input-mask';
import validator from 'validator';

emailjs.init(import.meta.env.VITE_EMAIL_KEY);

function Contact() {
    const [company, setCompany] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalOk, setModalOk] = useState(false);
    const [modalError, setModalError] = useState(false);
    const [customMsg, setCustomMsg] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalOk(false)
        setModalError(false)
        try {
            setLoading(true)
            const response = await emailjs.send("service_tczsixn","template_ku8fju9",{
                from_name: nome,
                to_name: 'BTTIS',
                to_email: 'testecidadaoon@gmail.com',
                subject: 'Contato via site da BTTIS',
                message: `
                ${mensagem} <br/>
                
                Email: ${email} <br/>
                Telefone: ${telefone}<br/>
                Empresa: ${empresa}
                `,
            })
            if(response.status === 200) {
                setLoading(false)
                setModalOk(true)
                setCompany('')
                setNome('')
                setEmail('')
                setTelefone('')
                setMensagem('')
            } else {
                setLoading(false)
                setModalError(true)
                setCompany('')
                setNome('')
                setEmail('')
                setTelefone('')
                setMensagem('')
            }
        } catch (err) {
            console.log(err)
            setLoading(false)
            setModalError(!modalError)
        }
    }

    function validateForm(event) {
        if(company == undefined || company == ''  ) {            
          setCustomMsg('Por favor, insira o nome da empresa!')
          setModalError(true)
          event.preventDefault()
          return
        }
        if(nome == undefined || nome == ''  ) {            
          setCustomMsg('Por favor, insira o seu nome!')
          setModalError(true)
          event.preventDefault()
          return
        }
        if (!validator.isEmail(email)) {
          setCustomMsg('Por favor, insira um endereço de email válido.')
          setModalError(true)
          event.preventDefault()
          return
        }
        if (telefone == undefined || telefone == '' ) {
          setCustomMsg('Por favor, insira um número de telefone válido.')
          setModalError(true)
          event.preventDefault()
          return
        }
        if (mensagem == '' || mensagem?.length < 5 ) {
            console.log(mensagem?.length)
          setCustomMsg('Por favor, nos conte o motivo de seu contato!')
          setModalError(true)
          event.preventDefault()
          return
        }
      }

    return (
        <div>
            <div className='p-5 min-h-[350px]'>
                <div className='flex sm:flex-row flex-col w-full justify-center'>
                    <div className='sm:w-[320px] w-full'>
                        <h2 className='text-4xl text-white mb-5'>Entre em contato</h2>
                        <ContactList style={`text-md`}/>
                    </div>
                    <div className='sm:w-[40%] w-full'>
                        <form className="flex flex-col gap-5 sm:mt-0 mt-10" onSubmit={handleSubmit}>
                            <input
                                required="true"
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder='Empresa *'
                            />
                            <input
                                required="true"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder='Nome *'
                            />
                            <input
                                required="true"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email *'
                            />
                            <InputMask 
                                required="true"
                                mask="** * ****-****"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                placeholder='Telefone *'
                            />
                            <textarea
                                className='min-h-[90px]'
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                placeholder='Mensagem *'
                            ></textarea>
                            <button
                                onClick={validateForm}
                                type="submit"
                                className="mt-2 p-5 bg-transparent hover:bg-greenCl text-white border-2 border-green-500 rounded-md ease-in-out duration-500 
                                hover:-translate-y-[2px] ms:text-2xl ss:text-xl text-sm font-poppins"
                            >
                                {!loading ? 'Enviar' : <i className="animate-spin fa fa-circle-notch fa-spin text-3xl"></i>}
                            </button>
                        </form>
                        <>
                            {
                                modalOk ? <>
                                    <div role="alert" className="rounded-xl border border-gray-100 p-4 shadow-xl mt-10">
                                        <div className="flex items-start gap-4">
                                            <span className="text-greenCl">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </span>

                                            <div className="flex-1">
                                                <strong className="block font-medium text-white">E-mail Enviado </strong>

                                                <p className="mt-1 text-sm text-zinc-400">
                                                    Entraremos em contato em breve.
                                                </p>
                                            </div>

                                            <div onClick={() => setModalOk(false)}>
                                                <button
                                                    className="text-gray-400 transition hover:text-greenCl"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-6 w-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </> : ""
                            }
                        </>
                        <>
                            {
                                modalError ? <>
                                    <div role="alert" className="rounded-xl border border-gray-100 p-4 shadow-xl mt-10">
                                        <div className="flex items-start gap-4">
                                            <span className="text-red-500">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>

                                            <div className="flex-1">
                                                <strong className="block font-medium text-white">Erro ao enviar e-mail!</strong>

                                                <p className="mt-1 text-sm text-zinc-400">
                                                    {
                                                        !customMsg ? `Alguma coisa deu errado, tente novamente ou
                                                        entre em contato através de outros meios de comunicação`
                                                        : customMsg
                                                    }
                                                </p>
                                            </div>

                                            <div onClick={() => setModalError(false)}>
                                                <button
                                                    className="text-gray-400 transition hover:text-greenCl"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-6 w-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </> : ''
                            }
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact