json.array!(@fasteners) do |fastener|
  json.extract! fastener, :id, :slno, :codeno, :typec, :grade, :item, :size, :quantity, :price
  json.url fastener_url(fastener, format: :json)
end
