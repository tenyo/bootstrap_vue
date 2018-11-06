package actions

import "github.com/gobuffalo/buffalo"

// HomeHandler serves the main Vue app
func HomeHandler(c buffalo.Context) error {
	return c.Render(200, r.HTML("home.html"))
}
