import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import BootstrapToast from '../Toast';
import { useTranslation } from 'next-i18next';
import { I18N_NAMESPACES } from '../../../helpers/constants';

const ContactForm = () => {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);
  const form = useRef<HTMLFormElement>(null);
  const [sentEmail, setSentEmail] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [message, setMessage] = useState<ToastMessage>({});

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (sentEmail) {
      setMessage({
        title: t('common:toast_again_question'),
        comment: t('common:toast_woops'),
        body: t('common:toast_already_sent_email'),
      });
      setShowToast(true);
      return;
    }

    const userId = process.env.NEXT_PUBLIC_USER_ID!;
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, userId).then(
        () => {
          setMessage({
            title: t('common:toast_message_on_the_way'),
            comment: t('common:toast_success'),
            body: t('common:toast_thanks_for_getting_in_touch'),
          });
          setShowToast(true);
          setSentEmail(true);
        },
        () => {
          setMessage({
            title: t('common:toast_something_went_wrong'),
            comment: t('common:toast_error'),
            body: t('common:toast_apology_for_inconvenience'),
          });
          setShowToast(true);
        },
      );
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10" id="contact">
      <div>
        <h1 className="font-black text-4xl">{t('common:contact_me_title')}</h1>
        <p className="text-[#AAA6CF] max-w-2xl mt-4">
          {t('common:contact_intro_1')}
          {t('common:contact_intro_2')}
        </p>
        <p className="text-[#AAA6CF] max-w-2xl mt-4">{t('common:contact_intro_3')}</p>
        <p className="text-[#AAA6CF] max-w-2xl mt-4">{t('common:contact_intro_4')}</p>
      </div>
      <div>
        {showToast && <BootstrapToast message={message} setShowToast={setShowToast} />}
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="my-2">
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-400">
                {t('common:contact_label_your_name')}
              </label>
              <input
                required
                id="from_name"
                name="from_name"
                type="text"
                placeholder={t('common:contact_placeholder_your_name')}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="my-2">
              <label htmlFor="reply_to" className="block text-sm font-medium text-gray-400">
                {t('common:contact_label_email_address')}
              </label>
              <input
                required
                id="reply_to"
                name="reply_to"
                type="email"
                placeholder={t('common:contact_placeholder_email_address')}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
              {t('common:contact_label_your_message')}
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={3}
              placeholder={t('common:contact_form_message_placeholder')}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t('common:contact_button_submit')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
