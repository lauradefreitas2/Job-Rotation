public class Main {
    public static void main(String[] args) {
        int distancia = 100;
        int velocidadeCarro = 110;
        int velocidadeCaminhao = 80;
        int tempoPedagio = 5; // minutos

        double distanciaTotal = distancia * 1000.0; // converte para metros

        double tempoCarro = distanciaTotal / (velocidadeCarro * 1000.0 / 3600.0); // em horas
        double tempoCaminhao = distanciaTotal / (velocidadeCaminhao * 1000.0 / 3600.0); // em horas

        double tempoPedagiosCaminhao = tempoPedagio / 60.0 * 2; // tempo em horas
        tempoCaminhao += tempoPedagiosCaminhao;

        double posicaoCarro = velocidadeCarro * tempoCarro;
        double posicaoCaminhao = distanciaTotal - velocidadeCaminhao * tempoCaminhao;

        if (posicaoCarro < posicaoCaminhao) {
            System.out.println("O carro está mais próximo de Ribeirão Preto.");
        } else {
            System.out.println("O caminhão está mais próximo de Ribeirão Preto.");
        }
    }
}