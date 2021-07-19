#!/usr/bin/zsh
setopt extendedglob
for file (*~*.zwc)
	zcompile -- "$file"
