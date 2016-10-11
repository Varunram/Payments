json.array!(@rods) do |rod|
  json.extract! rod, :id, :slno, :code, :typec, :material, :size, :tk, :dia, :lg, :quantity, :weight, :price
  json.url rod_url(rod, format: :json)
end
