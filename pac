#!hint/zsh
case "$1" in
	(-h|--help) ;;
	(*)
		repo-add /home/repo/local-repo.db.tar.gz /home/repo/*pkg.tar.* 2>>(grep -v WARNING >&2) | tail -n1 | sed '1s/==>/[32m==>[m/g' \
			|| { rm /home/repo/local-repo.db.tar.gz.lck; return 1; } ;;
esac
paru "$@"
