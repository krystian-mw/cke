import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
// import DropdownButtonView from "@ckeditor/ckeditor5-ui/src/dropdown/button/dropdownbuttonview";

import DropdownButtonView from "@ckeditor/ckeditor5-ui/src/dropdown/button/dropdownbuttonview";
import DropdownPanelView from "@ckeditor/ckeditor5-ui/src/dropdown/dropdownpanelview";
import DropdownView from "@ckeditor/ckeditor5-ui/src/dropdown/dropdownview";

import icon from "./icons/attachment_black_24dp.svg";

export default class Attachamizer extends Plugin {
  static get pluginName() {
    return "Attachamizer";
  }

  static get isContextPlugin() {
    return false;
  }

  init() {
    const options = this.editor.config.get("attachamizer");

    this.editor.ui.componentFactory.add("addAttachment", (locale) => {
      //   const view = new DropdownButtonView(locale);

      //   view.set({
      //     label: "Attachamizer",
      //     icon,
      //     tooltip: true,
      //   });

      const button = new DropdownButtonView(locale);
      const panel = new DropdownPanelView(locale);
      const dropdown = new DropdownView(locale, button, panel);

      //   view.on("execute", () => {
      //     options.upload(this.editor);
      //   });

      //   view.render();

      button.set({
        label: "A dropdown",
        withText: true,
      });

      dropdown.render();

      button.on("execute", () => {
        console.debug({
          button,
          panel,
          dropdown,
        });
      });

      return button;
    });
  }
}
