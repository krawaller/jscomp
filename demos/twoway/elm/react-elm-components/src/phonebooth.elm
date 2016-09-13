port module Phonebooth exposing (main)

import Html exposing (Html, Attribute, div, input, text, button, p)
import Html.App as App
import Html.Attributes exposing (..)
import Html.Events exposing (onInput, onClick)


main =
    App.beginnerProgram { model = model, view = view, update = update }



-- MODEL


type alias Model =
    { name : String
    }


model : Model
model =
    { name = "Steve" }



-- UPDATE


type Msg
    = ChangeName String
    | SuitUp


update : Msg -> Model -> Model
update msg model =
    case msg of
        ChangeName newName ->
            { model | name = newName }

        SuitUp ->
            { name = "Batman" }



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ div [] [ input [ onInput ChangeName, value model.name ] [] ]
        , p []
            [ text "Your name is "
            , text model.name
            ]
        , button [ onClick SuitUp ] [ text "Put on costume" ]
        ]
