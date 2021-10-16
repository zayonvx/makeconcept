import {MAIN_PAGE_QUERY} from "./mainPage";
import {LOGO_QUERY} from "./logo";
import {MENU_QUERY} from "./menu";
import {CONTACTS_INFO} from "./contacts";

export const queries = `query rootQuery {${MAIN_PAGE_QUERY} ${LOGO_QUERY} ${MENU_QUERY} ${CONTACTS_INFO}}`;