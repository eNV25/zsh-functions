#!hint/zsh
if [[ $1 == '--raw' ]]
then xclip -o -selection clipboard
else print -r $1 -- "$(xclip -o -selection clipboard)"
fi
