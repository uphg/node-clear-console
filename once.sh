# 关联两个远程仓库
if [ -z $1 ];then
parame="update"
else
parame="$1"
fi

git add .
echo -e "\n# commit"
git commit -m "${parame}"

echo -e "\n# remote origin(GitHub|Gitee)"
git remote add github git@github.com:uphg/node-clear-console.git
git remote add gitee git@gitee.com:uphg/node-clear-console.git

echo -e "\n# push Github"
git push github master:master

echo -e "\n# push Gitee"
git push gitee master:master
