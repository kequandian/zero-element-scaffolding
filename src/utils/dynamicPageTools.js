
import { LS } from 'zero-element/lib/utils/storage';

function getPageId (pathname) {
    const menuList = LS.get('menuList')
    const index = pathname.lastIndexOf("\/")
    const entityName = pathname.substring(index + 1, pathname.length)
    let pageId = "";
    let title = "";
    menuList && menuList.length > 0 && menuList.map(menuItem => {
        const itemList = menuItem.items
        itemList.map(item => {
            if (item.path.indexOf(entityName) != -1) {
                pageId = item.pageId
                title = item.name
            }
        })
    });
    return {pageId, entityName, title}
}

function getPageTitle (pageId) {
    const menuList = LS.get('menuList')
    let title = "";
    menuList && menuList.length > 0 && menuList.map(menuItem => {
        const itemList = menuItem.items
        itemList.map(item => {
            if (item.pageId === pageId) {
                title = item.name
            }
        })
    });
    return title
}

export {
    getPageId,
    getPageTitle
}