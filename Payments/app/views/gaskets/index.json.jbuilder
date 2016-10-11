json.array!(@gaskets) do |gasket|
  json.extract! gasket, :id, :slno, :codeno, :typec, :material, :nb, :thk, :classc, :quantity, :—-force-plural, :price
  json.url gasket_url(gasket, format: :json)
end
