let BASE_URL = ''


if (process.env.NODE_ENV == 'development') {
    BASE_URL = 'https://www.fastmock.site/mock/82774f8265f049796a981122d0941788/vac' // 开发环境
} else {
	BASE_URL = 'https://www.fastmock.site/mock/82774f8265f049796a981122d0941788/vac' // 生产环境
}
let staticDomainURL = BASE_URL+ '/sys/common/static';

const configService = {
	apiUrl: BASE_URL,
	staticDomainURL: staticDomainURL
};

export default configService