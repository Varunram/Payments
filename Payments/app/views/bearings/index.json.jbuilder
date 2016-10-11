json.array!(@bearings) do |bearing|
  json.extract! bearing, :id, :slno, :codeno, :typec, :materialdescription, :size, :quantity, :price
  json.url bearing_url(bearing, format: :json)
end
