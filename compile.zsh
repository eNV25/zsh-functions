#!/usr/bin/zsh
setopt extendedglob
for file (*~*.*)
	zcompile -- "$file"
