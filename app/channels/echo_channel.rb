# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class EchoChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    stream_from "echo_channel"
  end

  def unsubscribed
    stop_all_streams
  end
end
