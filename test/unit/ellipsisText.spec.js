/* 引入依赖 */
import { mount } from '@vue/test-utils';
import EllipsisText from '../../src/ellipsisText/EllipsisText.vue';

/* 测试用例 */
describe('\n====== EllipsisText组件测试 ======\n', () => {
  const instance = mount(EllipsisText, {
    propsData: {      
      content: '据说每个男人生命里都有一道白月光，娴静，美好，甜美着整个青春的回忆。粟融珵生命里的特么为毛是只黑月光？',
      line: 1,
      hasMore: true
    }
  });
  var wrapper = instance.find('.vx-ellipsis-text');

  it('组件是否渲染成功', () => {
    expect(wrapper.classes()).toContain('vx-ellipsis-text');
  });
  it('内容是否填充', () => {
    expect(wrapper.find('.ellipsis-content').html()).toContain('据说每个男人生命里都有一道白月光');
  });
  it('文字溢出时是否出现【更多】按钮', () => {
    setTimeout(()=>{
      const con = wrapper.find('.ellipsis-container');
      con.style.width='300px';
      expect(con.html()).toContain('【更多】');
    }, 10)    
  });
  it('点击【更多】按钮是否展示全部文字', () => {
    const ele = wrapper.find('.ellipsis-more');
    ele.trigger('click');
    expect(wrapper.classes()).toContain('reveal')
  });
  it('点击【收起】按钮是否收起文字', () => {
    const ele = wrapper.find('.ellipsis-fold-text');
    ele.trigger('click');
    expect(wrapper.classes()).not.toContain('reveal')
  });  
  /* it('>生成测试快照', () => {   
    expect(instance.vm.$el).toMatchSnapshot();
  })  */
});
