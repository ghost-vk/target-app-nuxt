export const state = () => ({
  contacts: {
    instagram: 'https://www.instagram.com/anastasi_target/',
    telegram: 'https://t.me/anastasi_target',
    whatsapp: 'https://api.whatsapp.com/send?phone=79309905159',
    telegramChat: 'https://t.me/anastasitarget',
    youtube: 'https://www.youtube.com/channel/UCPwsGtqNLKYvNXmqqhQQXoA/featured',
    telegramPaymentBot: 'https://t.me/at_payment_bot',
    briefURL: 'https://forms.gle/RYYJK4oZ4hxcmKMc9',
  }
})

export const getters = {
  contacts: s => s.contacts
}
