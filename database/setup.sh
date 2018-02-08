curl -XDELETE http://localhost:9200/product-inventory
curl -H "Content-Type: application/json" -XPUT http://localhost:9200/products -d @setup.json
curl -s -H "Content-Type: application/json" -XPOST http://localhost:9200/_bulk --data-binary @dup-data-bulk.json
