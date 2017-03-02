port module Clicker exposing (main)

import Html exposing (div, p, button, text)
import Html.App exposing (beginnerProgram)
import Html.Events exposing (onClick)


main =
    beginnerProgram { model = 3, view = view, update = update }


view model =
    div []
        [ p []
            [ text (toString model)
            , text " bottles of beer on the wall"
            ]
        , button [ onClick Increment ] [ text "Buy more" ]
        ]


type Msg
    = Increment


update : Msg -> number -> number
update msg model =
    case msg of
        Increment ->
            model + 1
