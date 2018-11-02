package grifts

import (
	"github.com/gobuffalo/buffalo"
	"github.com/tenyo/buffalo_vue/actions"
)

func init() {
	buffalo.Grifts(actions.App())
}
