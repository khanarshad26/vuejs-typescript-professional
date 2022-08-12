import HelloWorld from "@/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("HelloWorld.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      props: {
        msg: "default msg",
      },
    });
  });

  it("should render default snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders different prop.msg when passed", async () => {
    await wrapper.setProps({ msg: "test msg" });
    expect(wrapper.text()).toMatch("test msg");
  });

  it("should give error when max character limit exceed of text input", async () => {
    const input = await wrapper.find("#input");
    await input.setValue("arshadguyuygnu");
    expect(wrapper.text()).toContain(
      "Error: Max character limit exceed of text input"
    );
  });

  it("should render name if limit doesn't exceed", async () => {
    const input = await wrapper.find("#input");
    await input.setValue("arshad");
    expect(wrapper.text()).toContain("arshad");
  });

  it("should not render error when limit doesn't exceed", async () => {
    const input = await wrapper.find("#input");
    await input.setValue("arshad");
    expect(wrapper.vm.showError).toBeFalsy();
  });

  afterEach(() => {
    wrapper.unmount();
  });
});
