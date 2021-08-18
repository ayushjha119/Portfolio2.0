import React from 'react';
import ButtonWithLoader from './loadingButton';
import { useTranslation } from 'react-i18next';
import './styles.css';

const ContactForm = ({ handleChange, handleSubmit, data, loading }) => {
    const { t } = useTranslation('global');
    const { name, email, message } = data;

    return (
        <div id="contact-form">
            <form autoComplete="off" onSubmit={() => false}>
                <div className="field">
                    <label htmlFor="name">{t("Name")}</label>
                    <input 
                        type="text" 
                        required 
                        name="name" 
                        placeholder={t("Type you name")} 
                        value={name || ''}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>
                <div className="field">
                    <label htmlFor="email">{t("Email")}</label>
                    <input 
                        type="email" 
                        required 
                        name="email" 
                        placeholder={t("Type your email")}
                        value={email || ''} 
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>
                <div className="field">
                    <label htmlFor="name">{t("Message")}</label>
                    <textarea 
                        name="message" 
                        required
                        id="message"
                        placeholder={t("Give your suggestion")}
                        value={message || ''}
                        onChange={handleChange}
                        minLength="15"
                        autoComplete="off"
                    />

                </div>
                <ButtonWithLoader 
                    type="submit"
                    text={t("Send")}
                    onClick={handleSubmit}
                    loading={loading}  
                />
            </form>
        </div>
    );
}
 
export default ContactForm;