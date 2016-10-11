json.array!(@tubes) do |tube|
  json.extract! tube, :id, :slno, :codeno, :typec, :materialgrade, :od, :lg, :weight, :quantity, :price
  json.url tube_url(tube, format: :json)
end
