
import { LS } from 'zero-element/lib/utils/storage';

function getPageId (pathname) {
    const menuList = LS.get('menuList')
    const index = pathname.lastIndexOf("\/")
    const entityName = pathname.substring(index + 1, pathname.length)
    let pageId = "";
    menuList && menuList.length > 0 && menuList.map(menuItem => {
        const itemList = menuItem.items
        itemList.map(item => {
            if (item.path.indexOf(entityName) != -1) {
                console.log('pageId = ', pageId)
                pageId = item.pageId
            }
        })
    });
    return {pageId, entityName}
}

export {
    getPageId
}