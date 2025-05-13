const API_PREFIX = "/api"

// =========================== SERVER ===========================
const CTI_SERVER = "/cti"
const HOME_SERVER = "/home"

// ============================ HOME API =============================
export const HOME_VIEW_SDO_ITEMS_COUNT = API_PREFIX + HOME_SERVER + "/home/view/sdoItemsCount"
export const HOME_VIEW_SCO_ITEMS_COUNT = API_PREFIX + HOME_SERVER + "/home/view/scoItemsCount"
export const HOME_VIEW_CTI_TOTAL_COUNT = API_PREFIX + HOME_SERVER + "/home/view/ctiTotalCount"

// ============================ CTI API =============================
export const SEARCH_CTI = API_PREFIX + CTI_SERVER + "/search/page/es/vo"
