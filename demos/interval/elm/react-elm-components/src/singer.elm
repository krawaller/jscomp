port module Singer exposing (main)

import Html exposing (Html, Attribute, div, input, text, button, p)
import Html.App as App
import Array exposing (..)
import Time exposing (Time, millisecond)
import Maybe exposing (withDefault)


main =
    App.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    Int


init : ( Model, Cmd Msg )
init =
    ( 0, Cmd.none )



-- UPDATE


type Msg
    = Tick Time


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick index ->
            ( (model + 1) % 4, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every (millisecond * 1500) Tick



-- VIEW


lyrics : Array String
lyrics =
    Array.fromList [ "Eeexiiit light", "Eeenteeer niight", "Taaake my haaand", "We're off to never never land" ]


getLyricPart : Array String -> Int -> String
getLyricPart lyricsArray index =
    withDefault "" (get index lyricsArray)


view : Int -> Html a
view model =
    div [] [ text (getLyricPart lyrics model) ]
