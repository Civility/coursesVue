import { shallowMount } from '@vue/test-utils'
import ListPagenation from '@/components/SelectionList.vue'

describe('SelectionList.vue', () => {
  it('Экземпляр Vue', () => {
    const wrapper = shallowMount(ListPagenation, {
      propsData: {
        value: 1
      }
    })
    expect(wrapper.isVueInstance()).toEqual(true)
  })

  it('value true', () => {
    const wrapper = shallowMount(ListPagenation, {
      propsData: {
        value: 1
      }
    })
    expect(wrapper.vm.value).toBeDefined()
    expect(wrapper.vm.value).toEqual(1)

    wrapper.setProps({
      value: 9
    })
    expect(wrapper.vm.value).toEqual(9)
  })

  it('list true', () => {
    const wrapper = shallowMount(ListPagenation, {
      propsData: {
        value: 1
      }
    })
    expect(wrapper.vm.list).toBeDefined()
    expect(wrapper.vm.list).toEqual([5, 10, 15, 50, 100])
    wrapper.setProps({
      list: [1, 2]
    })
    expect(wrapper.vm.list).toEqual([1, 2])
  })

  it('changed true', () => {
    const wrapper = shallowMount(ListPagenation, {
      propsData: {
        value: 5
      }
    })
    expect(wrapper.vm.changed).toBeDefined()
    wrapper.vm.changed(3)
    expect(wrapper.emitted('input').length).toEqual(1)
    expect(wrapper.emitted('input')[0]).toEqual([3])
  })

  it('class custom-select true', () => {
    const wrapper = shallowMount(ListPagenation, {
      propsData: {
        value: 1
      }
    })
    expect(wrapper.contains('select.custom-select')).toEqual(true)
    expect(wrapper.find('select.custom-select').findAll('option').length).toBe(5)
  })
})
