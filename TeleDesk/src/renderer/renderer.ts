export {};
declare const window: any;

/**
 * Call to process input event (navigate to page as inputted in field).
 */
function triggerInputEvent(): void {
    quickChangePage((document.getElementById('telepage') as HTMLInputElement).value);
}

/**
 * Call to navigate to the previous page.
 */
function previousPage(): void {
    const frame: any = (document.getElementById('teleframe') as HTMLIFrameElement).contentWindow;
    frame.previousPage();
}

/**
 * Call to navigate to the next page.
 */
function nextPage(): void {
    const frame: any = (document.getElementById('teleframe') as HTMLIFrameElement).contentWindow;
    frame.nextPage();
}

/**
 * Call to update the page input (as display label).
 * @param page The page that should be displayed.
 */
function updateCurrentPage(page: string): void {
    (document.getElementById('telepage') as HTMLInputElement).value = page;
}

/**
 * Call to navigate to the desired page.
 * @param page The page that should be navigated to.
 */
function quickChangePage(page: string): void {
    const frame: any = (document.getElementById('teleframe') as HTMLIFrameElement).contentWindow;
    frame.teleUpdate(page);
}