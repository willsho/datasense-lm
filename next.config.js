/** @type {import('next').NextConfig} */
const nextConfig = {
  // 从环境变量获取 basePath
  basePath: process.env.PUBLIC_PATH || '',
  
  // 输出目录配置
  distDir: 'build',
  
  // 生产环境资源前缀
  assetPrefix: process.env.PUBLIC_PATH || '',
  
  // 启用图片优化
  images: {
    domains: [],
    // 图片加载路径前缀
    path: `${process.env.PUBLIC_PATH || ''}/_next/image`,
  },
  
  // 生产环境配置
  productionBrowserSourceMaps: true,
  
  // 启用 SWC 压缩
  swcMinify: true,
  
  // 环境变量配置
  env: {
    PUBLIC_PATH: process.env.PUBLIC_PATH || '',
  },
}

module.exports = nextConfig 