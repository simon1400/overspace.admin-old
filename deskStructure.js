import S from "@sanity/desk-tool/structure-builder";
import { FaCogs } from "react-icons/fa";

const hiddenDocTypes = listItem => ![
  "settings"
].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([

      ...S.documentTypeListItems()
        .filter(hiddenDocTypes),

        S.documentListItem()
          .title("Nastaveni")
          .icon(FaCogs)
          .id('settings')
          .schemaType("settings"),


      ]);
