FROM rust:1.76 AS builder
WORKDIR /app
COPY Cargo.toml /app/Cargo.toml
RUN mkdir -p /app/src && echo "fn main(){}" > /app/src/main.rs
RUN cargo build --release
COPY src /app/src
RUN cargo build --release

FROM debian:bookworm-slim
RUN useradd -m appuser
WORKDIR /app
COPY --from=builder /app/target/release/rust_app /app/rust_app
EXPOSE 8080
USER appuser
CMD ["/app/rust_app"]
