#!/usr/bin/env sh
# 当发生错误时中止脚本
set -e
# 构建
# npm run build:local
# cd 到构建输出的目录下
cd build
echo "build successfully"
# 部署到自定义域域名
echo 'www.example.com' > CNAME

cd ..
# cp -r /e/App/source/build /e/ftp
# cp -r ./build /e/ftp
# git init
# git add -A
# git commit -m 'deploy'
# # 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# # 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
ftp -v -n <<EOF
open 127.0.0.1 21
user DELL 1210
binary
hash
cd /
lcd /App/source/build
prompt
mput -r *
bye
#here document
EOF
echo "commit to ftp successfully"
cd -