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
import { ButtonView } from "ckeditor5/src/ui";

export default class Attachamizer extends Plugin {
  static get pluginName() {
    return "Attachamizer";
  }

  static get isContextPlugin() {
    return false;
  }

  init() {
    const options = this.editor.config.get("attachamizer");
    const { editor } = this;

    this.editor.ui.componentFactory.add("addAttachment", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        icon: icons.file,
        withText: true,
        label: "Choose From Attachments",
      });

      view.on("execute", async () => {
        try {
          const src = await options.chooseFromAttachments();

          editor.model.change((writer) => {
            const imageElement = writer.createElement("imageBlock", {
              src,
            });

            // Insert the image in the current selection location.
            editor.model.insertContent(
              imageElement,
              editor.model.document.selection
            );
          });
        } catch (e) {
          if (e) {
            console.error(e);
          }
        }
      });

      return view;
    });
  }
}
