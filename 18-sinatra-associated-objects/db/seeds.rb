Book.destroy_all

GoogleBooks::Adapter.new("Roald Dahl").fetch_books
GoogleBooks::Adapter.new("Judy Blume").fetch_books
GoogleBooks::Adapter.new("J.K. Rowling").fetch_books