import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
// import DropdownButtonView from "@ckeditor/ckeditor5-ui/src/dropdown/button/dropdownbuttonview";

import DropdownButtonView from "@ckeditor/ckeditor5-ui/src/dropdown/button/dropdownbuttonview";
import DropdownPanelView from "@ckeditor/ckeditor5-ui/src/dropdown/dropdownpanelview";
import DropdownView from "@ckeditor/ckeditor5-ui/src/dropdown/dropdownview";

import icons from "./icons";

import Model from "@ckeditor/ckeditor5-ui/src/model";
import Collection from "@ckeditor/ckeditor5-utils/src/collection";
import {
  addListToDropdown,
  createDropdown,
} from "@ckeditor/ckeditor5-ui/src/dropdown/utils";

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

      //   const button = new DropdownButtonView(locale);
      //   const panel = new DropdownPanelView(locale);
      //   const dropdown = new DropdownView(locale, button, panel);

      //   //   view.on("execute", () => {
      //   //     options.upload(this.editor);
      //   //   });

      //   //   view.render();

      //   button.set({
      //     label: "A dropdown",
      //     withText: true,
      //   });

      //   dropdown.render();

      //   button.on("execute", () => {
      //     console.debug({
      //       button,
      //       panel,
      //       dropdown,
      //     });
      //   });
      // The default dropdown.
      const dropdownView = createDropdown(locale);
      const items = new Collection();

      dropdownView.buttonView.set({ icon: icons.attachment });
      const self = this;
      items.add({
        id: "choose_from_attachments",
        type: "button",
        model: (() => {
          const model = new Model({
            icon: icons.file,
            withText: true,
            label: "Choose From Attachments",
          });
          console.debug(model);
          model.on("execute", async () => {
            const src = await options.choose_from_attachments();
            console.debug("will insert", src);
          });

          return model.bind(self);
        })(),
      });

      //   items.add({
      //     type: "button",
      //     model: new Model({}),
      //   });

      // Create a dropdown with a list inside the panel.
      addListToDropdown(dropdownView, items);
      return dropdownView;
    });
  }
}
