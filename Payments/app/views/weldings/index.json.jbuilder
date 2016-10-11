json.array!(@weldings) do |welding|
  json.extract! welding, :id, :slno, :codeno, :description, :quantity, :UOM, :price
  json.url welding_url(welding, format: :json)
end
