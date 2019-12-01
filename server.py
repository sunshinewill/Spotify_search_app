import bottle


@bottle.route("/")
def index():
    return bottle.static_file("index.html", root="/projects/Project2")


@bottle.route("/app.js")
def static():
    return bottle.static_file("app.js", root="/projects/Project2")


bottle.run(host="0.0.0.0", post=8080, debug=True)