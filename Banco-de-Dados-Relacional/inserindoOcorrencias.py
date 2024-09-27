import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import ocorrencias as oc

endereco = "D:\\Pos\\Fundamentos\\Banco-de-Dados-Relacional\\"
dp = pd.read_csv(endereco + "DP.csv",sep=";")
tbDP = pd.DataFrame(dp)

engine = sa.create_engine("sqlite:///Ocorrencias.db")
Sessao = orm.sessionmaker(bind=engine)
sessao = Sessao()

for i in range(len(tbDP)):
    dado_DP = oc.dp(
                    codDP = int(tbDP["codDP"][i]),
                    nome = tbDP["nome"][i],
                    endereco = tbDP["endereco"][i]
                )
    try:
        sessao.add(dado_DP)
        sessao.commit()
    except ValueError:
        print(ValueError())

print ("tbDP criada!")

#Municipio
municipio = pd.read_csv(endereco + "Municipio.csv",sep=";")
tbMunicipio = pd.DataFrame(municipio)
for i in range(len(tbMunicipio)):
    dado_municipio = oc.municipio(
                    codIBGE = int(tbMunicipio["codIBGE"][i]),
                    municipio = tbMunicipio["municipio"][i],
                    regiao = tbMunicipio["regiao"][i]
                )
    try:
        sessao.add(dado_municipio)
        sessao.commit()
    except ValueError:
        print(ValueError())

print ("tbMunicipio criada!")

#Ocorrencias
ocorrencias = pd.read_csv(endereco + "ocorrencias.xlsx",sep=";")
tbOcorrencias = pd.DataFrame(ocorrencias)
for i in range(len(tbOcorrencias)):
    dado_ocorrencia = oc.ocorrencias(
                    idRegistro = int(tbOcorrencias["idRegistro"][i]),
                    codDP = int(tbOcorrencias["municipio"][i]),
                    codIBGE = int(tbOcorrencias["codIBGE"][i]),
                    ano = tbOcorrencias["ano"][i],
                    mes = tbOcorrencias["mes"][i],
                    ocorrencia = tbOcorrencias["ocorrencia"][i],
                    qtde =  tbOcorrencias["qtde"][i]
                )
    try:
        sessao.add(dado_ocorrencia)
        sessao.commit()
    except ValueError:
        print(ValueError())

print ("tbOcorrencias criada!")

#ResposavelDP
responsavelDP = pd.read_csv(endereco + "ResponsavelDP.xlsx",sep=";")
tbResponsavelDP = pd.DataFrame(responsavelDP)
for i in range(len(tbResponsavelDP)):
    dado_responsavelDP = oc.responsavelDP(
                    codDP = int(tbResponsavelDP["codDP"][i]),
                    delegado =  tbOcorrencias["delegado"][i]
                )
    try:
        sessao.add(dado_ocorrencia)
        sessao.commit()
    except ValueError:
        print(ValueError())

print ("tbOcorrencias criada!")

try:
    conn.execute(tabela_produto.insert(), DadosProduto)
    sessao.commit()
except ValueError:
    print(ValueError())

print("tbOcorrencias criada!")

sessao.close_all()
print("Módulo de inserção de dados finalizado!")