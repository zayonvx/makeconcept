import {MAIN_PAGE_QUERY} from "./mainPage";
import {LOGO_QUERY} from "./logo";
import {MENU_QUERY} from "./menu";
import {CONTACTS_INFO_QUERY} from "./contacts";
import {ABOUT_PAGE_QUERY} from "./about";
import {PORTFOLIO_PAGE_QUERY} from "./portfolio";

export const queries = `query rootQuery {
 ${MAIN_PAGE_QUERY}
 ${PORTFOLIO_PAGE_QUERY} 
 ${LOGO_QUERY} ${MENU_QUERY} 
 ${CONTACTS_INFO_QUERY}
 ${ABOUT_PAGE_QUERY}}`;