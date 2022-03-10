export {};
declare const window: any;
import { ITeleData } from "../models/ITeleData";

let historyPage: ITeleData;

/**
 * Call to retrieve page number of last page from memory.
 * @returns The number of the last loaded page.
 */
export function getCurrentPage() : string {
    return historyPage.thisPage;
}

/**
 * Call to navigate to the next (sub)page.
 */
export function nextPage() {
    if(historyPage.nextSubPage!='')
    teleUpdate(historyPage.nextSubPage);
    else if (historyPage.nextPage!='')
    teleUpdate(historyPage.nextPage);
}

/**
 * Call to navigate to previous (sub)page.
 */
export function previousPage() {
    if(historyPage.prevSubPage!='')
    teleUpdate(historyPage.prevSubPage);
    else if (historyPage.prevPage!='')    
    teleUpdate(historyPage.prevPage);
}

/**
 * Call to navigate to a specific (sub)page based on a string.
 * @param page String that represents the page and subpage to navigate to.
 */
export function teleUpdate(page: string = '100') {
    let iTeleData: ITeleData = window.parent.window.tele.requestTeledata(page);
    if (iTeleData==undefined || iTeleData.content==undefined || iTeleData.content.length<1)
    iTeleData={...historyPage};
    else 
    { 
        window.parent.window.updateCurrentPage(page);
        historyPage={...iTeleData};
    }
    
    let div = document.getElementById('teledata');
    div.innerHTML = '<pre id="content">'+iTeleData.content+'</pre>';
    const linkElements = div.querySelectorAll('[href]');
    
    // The data is loaded by a http-get and displayed using DOM-manipulation.
    // There is no purpose in using a href function, since a browser is not in use.
    // Instead, bind this function to each href url.
    linkElements.forEach(element => 
        {
            const uri = element.getAttribute('href');
            element.setAttribute('onClick','teleUpdate("'+uri.replace('#','').replace('/','-')+'");');
        });
    }