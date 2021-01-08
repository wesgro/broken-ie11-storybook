import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: `
  <my-button v-bind="$props">
    <template #default=attrs>
    <span v-bind="attrs.attrs">I am not here</span>
    </template>
  </my-button>`,
});

const TemplateBroken  = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: `
  <my-button v-bind="$props">
    <template #default={attrs}>
    <span v-bind="{attrs}">I am not here</span>
    </template>
  </my-button>`,
});

export const WorksInIe11 = Template.bind({});
WorksInIe11.args = {
  primary: true,
  label: 'Button Works in Ie 11',
};

export const BrokenInIe11 = TemplateBroken.bind({});
TemplateBroken.args = {
  label: 'Button broken in ie 11',
};


