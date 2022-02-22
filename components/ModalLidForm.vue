<template>
  <app-modal-window :is-shown="isModalShown" @close="close">
    <p class="text-center md:text-lg text-gray-700 mb-5 px-3">{{ title }}</p>

    <form @submit.prevent="onSubmit">
      <div class="px-1">
        <app-rounded-full-width-input
          class="mb-3"
          :model-value="fieldValues.name"
          :placeholder="'Ваше имя'"
          :error="fieldErrors.name"
          @update:model-value="updateName"
        />

        <AppPhoneInput
          class="mb-3"
          :model-value="fieldValues.phone"
          :country-code="fieldValues.countryCode"
          :placeholder="'901 983 31 33'"
          :error="fieldErrors.phone"
          @update:model-value="updatePhone"
          @update-country="updateCountry"
        />
      </div>

      <template v-if="fieldValues.shouldCallback">
        <p class="block w-full text-center mb-2 text-gray-500">
          Выберите удобный тип связи
          <br />
          <span class="text-xs"> (Должен быть привязан номер телефона) </span>
        </p>
        <div class="flex flex-wrap justify-start mb-2 text-gray-800 text-sm select-none">
          <app-pilled-button
            v-for="btn in contactTypeButtons"
            :key="btn.value"
            class="mb-2 mr-2"
            :is-selected="btn.selected"
            :title="btn.title"
            @click="switchContactType(btn.value)"
          />
        </div>
      </template>

      <div v-else class="h-12"></div>

      <div class="flex mb-1 justify-center items-center">
        <app-check-box
          :is-error="!!fieldErrors.check"
          :model-value="fieldValues.check"
          @update:model-value="toggleCheck"
        />

        <p class="pl-2 text-xs w-full">
          Даю свое согласие на <a href='/static/docs/privacy.html' target="_blank" class="underline">обработку персональных данных</a>
        </p>
      </div>

      <div v-if="fieldErrors.check" class="text-xs text-red-400">{{ fieldErrors.check }}</div>

      <div class="mb-4"></div>

      <app-full-width-rounded-button title="Отправить" />
    </form>
  </app-modal-window>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppPhoneInput from '@/components/AppPhoneInput'

export default {
  components: {
    AppPhoneInput
  },

  props: {
    title: {
      type: String,
      default() {
        return 'Оставьте свои контактные данные, мы свяжемся с вами в ближайшее время'
      },
    },
  },

  computed: mapGetters({
    isModalShown: 'lead/isModalShown',
    contactTypeButtons: 'lead/contactTypeButtons',
    contactType: 'lead/contactType',
    checkPrivacy: 'lead/checkPrivacy',
    fieldErrors: 'lead/fieldErrors',
    fieldValues: 'lead/fieldValues',
    sendingStatus: 'lead/sendingStatus',
    notification: 'lead/notification',
    loading: 'lead/loading',
  }),

  methods: {
    ...mapActions({
      switchContactType: 'lead/switchContactType',
      toggleCheck: 'lead/toggleCheck',
      updateName: 'lead/updateName',
      updatePhone: 'lead/updatePhone',
      updateCountry: 'lead/updateCountry',
      onSubmit: 'lead/onSubmit',
      hideModal: 'lead/hideModal',
      updateNotification: 'lead/updateNotification',
      resetCurrentMagnet: 'magnets/reset',
    }),

    close() {
      this.resetCurrentMagnet()
      this.hideModal()
    }
  },

}
</script>
