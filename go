#!hint/zsh
GO="${GO:-/usr/bin/go}"
case "$1" in
	(doc|help)
		"$GO" "$@" | less -F ;;
	(*)
		"$GO" "$@" ;;
esac
