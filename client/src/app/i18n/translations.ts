export type Language = 'en' | 'id' | 'zhCN' | 'zhTW';

export interface Translations {
  home: string;
  topHeadlines: string;
  country: string;
  category: string;
  search: string;
  searchPlaceholder: string;
  allCategories: string;
  technology: string;
  business: string;
  science: string;
  health: string;
  entertainment: string;
  sports: string;
  general: string;
  english: string;
  bahasa: string;
  zhSimplified: string;
  zhTraditional: string;
  sentiment: string;
  positive: string;
  neutral: string;
  negative: string;
  trending: string;
  trendingTopics: string;
  audienceEngagement: string;
  sentimentDistribution: string;
  source: string;
  author: string;
  publishedAt: string;
  readMore: string;
  loadMore: string;
  previous: string;
  next: string;
  page: string;
  of: string;
  account: string;
  bookmarks: string;
  settings: string;
  darkMode: string;
  lightMode: string;
  profile: string;
  createAccount: string;
  addAccount: string;
  loggedInAs: string;
  scrollToTop: string;
  articleSentiment: string;
  emotionBreakdown: string;
  topicKeywords: string;
  comments: string;
  writeComment: string;
  reply: string;
  joy: string;
  sadness: string;
  anger: string;
  fear: string;
  surprise: string;
  backToHome: string;
  filterByCountry: string;
  selectLanguage: string;
  noResults: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    home: 'Home',
    topHeadlines: 'Top Headlines',
    country: 'Country',
    category: 'Category',
    search: 'Search',
    searchPlaceholder: 'Search news, topics, sources...',
    allCategories: 'All Categories',
    technology: 'Technology',
    business: 'Business',
    science: 'Science',
    health: 'Health',
    entertainment: 'Entertainment',
    sports: 'Sports',
    general: 'General',
    english: 'English',
    bahasa: 'Bahasa Indonesia',
    zhSimplified: '简体中文',
    zhTraditional: '繁體中文',
    sentiment: 'Sentiment',
    positive: 'Positive',
    neutral: 'Neutral',
    negative: 'Negative',
    trending: 'Trending',
    trendingTopics: 'Trending Topics',
    audienceEngagement: 'Audience Engagement',
    sentimentDistribution: 'Sentiment Distribution',
    source: 'Source',
    author: 'Author',
    publishedAt: 'Published At',
    readMore: 'Read More',
    loadMore: 'Load More',
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    of: 'of',
    account: 'Account',
    bookmarks: 'Bookmarks',
    settings: 'Settings',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    profile: 'Profile',
    createAccount: 'Create New Account',
    addAccount: 'Add Existing Account',
    loggedInAs: 'Logged in as',
    scrollToTop: 'Scroll to top',
    articleSentiment: 'Article Sentiment',
    emotionBreakdown: 'Emotion Breakdown',
    topicKeywords: 'Topic Keywords',
    comments: 'Comments',
    writeComment: 'Write a comment...',
    reply: 'Reply',
    joy: 'Joy',
    sadness: 'Sadness',
    anger: 'Anger',
    fear: 'Fear',
    surprise: 'Surprise',
    backToHome: 'Back to Home',
    filterByCountry: 'Filter by Country',
    selectLanguage: 'Language',
    noResults: 'No results found',
  },
  id: {
    home: 'Beranda',
    topHeadlines: 'Berita Utama',
    country: 'Negara',
    category: 'Kategori',
    search: 'Cari',
    searchPlaceholder: 'Cari berita, topik, sumber...',
    allCategories: 'Semua Kategori',
    technology: 'Teknologi',
    business: 'Bisnis',
    science: 'Sains',
    health: 'Kesehatan',
    entertainment: 'Hiburan',
    sports: 'Olahraga',
    general: 'Umum',
    english: 'English',
    bahasa: 'Bahasa Indonesia',
    zhSimplified: '简体中文',
    zhTraditional: '繁體中文',
    sentiment: 'Sentimen',
    positive: 'Positif',
    neutral: 'Netral',
    negative: 'Negatif',
    trending: 'Tren',
    trendingTopics: 'Topik Tren',
    audienceEngagement: 'Keterlibatan Audiens',
    sentimentDistribution: 'Distribusi Sentimen',
    source: 'Sumber',
    author: 'Penulis',
    publishedAt: 'Diterbitkan',
    readMore: 'Baca Selengkapnya',
    loadMore: 'Muat Lebih Banyak',
    previous: 'Sebelumnya',
    next: 'Berikutnya',
    page: 'Halaman',
    of: 'dari',
    account: 'Akun',
    bookmarks: 'Bookmark',
    settings: 'Pengaturan',
    darkMode: 'Mode Gelap',
    lightMode: 'Mode Terang',
    profile: 'Profil',
    createAccount: 'Buat Akun Baru',
    addAccount: 'Tambah Akun',
    loggedInAs: 'Masuk sebagai',
    scrollToTop: 'Ke atas',
    articleSentiment: 'Sentimen Artikel',
    emotionBreakdown: 'Rincian Emosi',
    topicKeywords: 'Kata Kunci',
    comments: 'Komentar',
    writeComment: 'Tulis komentar...',
    reply: 'Balas',
    joy: 'Sukacita',
    sadness: 'Kesedihan',
    anger: 'Kemarahan',
    fear: 'Ketakutan',
    surprise: 'Kejutan',
    backToHome: 'Kembali ke Beranda',
    filterByCountry: 'Filter Berdasarkan Negara',
    selectLanguage: 'Bahasa',
    noResults: 'Tidak ada hasil',
  },
  zhCN: {
    home: '首页',
    topHeadlines: '头条新闻',
    country: '国家',
    category: '分类',
    search: '搜索',
    searchPlaceholder: '搜索新闻、话题、来源...',
    allCategories: '所有分类',
    technology: '科技',
    business: '商业',
    science: '科学',
    health: '健康',
    entertainment: '娱乐',
    sports: '体育',
    general: '综合',
    english: 'English',
    bahasa: 'Bahasa Indonesia',
    zhSimplified: '简体中文',
    zhTraditional: '繁體中文',
    sentiment: '情感',
    positive: '积极',
    neutral: '中立',
    negative: '消极',
    trending: '热门',
    trendingTopics: '热门话题',
    audienceEngagement: '受众参与度',
    sentimentDistribution: '情感分布',
    source: '来源',
    author: '作者',
    publishedAt: '发布时间',
    readMore: '阅读更多',
    loadMore: '加载更多',
    previous: '上一页',
    next: '下一页',
    page: '第',
    of: '页，共',
    account: '账户',
    bookmarks: '书签',
    settings: '设置',
    darkMode: '深色模式',
    lightMode: '浅色模式',
    profile: '个人资料',
    createAccount: '创建新账户',
    addAccount: '添加现有账户',
    loggedInAs: '登录身份',
    scrollToTop: '返回顶部',
    articleSentiment: '文章情感',
    emotionBreakdown: '情绪分析',
    topicKeywords: '关键词',
    comments: '评论',
    writeComment: '写评论...',
    reply: '回复',
    joy: '喜悦',
    sadness: '悲伤',
    anger: '愤怒',
    fear: '恐惧',
    surprise: '惊讶',
    backToHome: '返回首页',
    filterByCountry: '按国家筛选',
    selectLanguage: '语言',
    noResults: '未找到结果',
  },
  zhTW: {
    home: '首頁',
    topHeadlines: '頭條新聞',
    country: '國家',
    category: '分類',
    search: '搜尋',
    searchPlaceholder: '搜尋新聞、話題、來源...',
    allCategories: '所有分類',
    technology: '科技',
    business: '商業',
    science: '科學',
    health: '健康',
    entertainment: '娛樂',
    sports: '體育',
    general: '綜合',
    english: 'English',
    bahasa: 'Bahasa Indonesia',
    zhSimplified: '简体中文',
    zhTraditional: '繁體中文',
    sentiment: '情感',
    positive: '積極',
    neutral: '中立',
    negative: '消極',
    trending: '熱門',
    trendingTopics: '熱門話題',
    audienceEngagement: '受眾參與度',
    sentimentDistribution: '情感分佈',
    source: '來源',
    author: '作者',
    publishedAt: '發布時間',
    readMore: '閱讀更多',
    loadMore: '載入更多',
    previous: '上一頁',
    next: '下一頁',
    page: '第',
    of: '頁，共',
    account: '帳戶',
    bookmarks: '書籤',
    settings: '設定',
    darkMode: '深色模式',
    lightMode: '淺色模式',
    profile: '個人資料',
    createAccount: '建立新帳戶',
    addAccount: '新增現有帳戶',
    loggedInAs: '登入身份',
    scrollToTop: '返回頂部',
    articleSentiment: '文章情感',
    emotionBreakdown: '情緒分析',
    topicKeywords: '關鍵詞',
    comments: '評論',
    writeComment: '寫評論...',
    reply: '回覆',
    joy: '喜悅',
    sadness: '悲傷',
    anger: '憤怒',
    fear: '恐懼',
    surprise: '驚訝',
    backToHome: '返回首頁',
    filterByCountry: '按國家篩選',
    selectLanguage: '語言',
    noResults: '未找到結果',
  },
};
